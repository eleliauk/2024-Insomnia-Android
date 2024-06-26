import { ImageBackground, TouchableHighlight, View } from 'react-native'
import { useState } from 'react'
import {
   ChainedModal,
   NoReplyModal,
} from './components/modal/conversationModal'
import styles from './conversation_style'
import witch from '../../assets/witch.png'
const Conversation = () => {
   const [updateQuestion, setUpdateQuestion] = useState(false)
   const [noReply, setNoReply] = useState(true)
   const handleEndReply = () => {
      setNoReply(true)
   }
   return (
      <>
         <ImageBackground style={styles.witch} source={witch}>
            <TouchableHighlight
               style={styles.clickable}
               onPress={() => {
                  setNoReply(false)
               }}
            >
               <View style={styles.clickable}></View>
            </TouchableHighlight>
            {noReply ? (
               <NoReplyModal></NoReplyModal>
            ) : (
               <ChainedModal
                  update={updateQuestion}
                  onEnd={handleEndReply}
               ></ChainedModal>
            )}
         </ImageBackground>
      </>
   )
}

export default Conversation
