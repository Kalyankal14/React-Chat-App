import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Chat = () => {
    const [newMessage, setNewMessage ] = useState('');
    const messageRef = collection(db, 'messages');

    useEffect(()=> {
      const queryMessages = query(messageRef);
      onSnapshot(queryMessages,)

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage === '') 
        return ;

        await addDoc(messageRef, {
            msg : newMessage,
            createdAt : serverTimestamp(),
            user : auth.currentUser.displayName,

        });

        setNewMessage('');
    }


  //   const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
  //     const fetchedMessages = [];
  //     QuerySnapshot.forEach((doc) => {
  //       fetchedMessages.push({ ...doc.data(), id: doc.id });
  //     });
  //     const sortedMessages = fetchedMessages.sort(
  //       (a, b) => a.createdAt - b.createdAt
  //     );
  //     setMessages(sortedMessages);
  //   });
  //   return () => unsubscribe;
  // }, []);

  return (
    <form onSubmit={handleSubmit}> 
        <input type='text' 
        placeholder='Type something...'
        value={newMessage}
        onChange={(e)=>setNewMessage(e.target.value)}
        /> 

        <button type='submit'> Send 
        </button>
    </form>
  )
}

export default Chat