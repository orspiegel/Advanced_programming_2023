import img1 from './contactsImg/Ray_ProfPic.jpg'
import img2 from './contactsImg/Robbie_ProfPic.jpg'
import img3 from './contactsImg/Adam_ProfPic.jpg'
import img4 from './contactsImg/Chris_ProfPic.jpg'
import img5 from './contactsImg/Darin_ProfPic.jpg'
import FormatMessage from './components/FormatMessage'

const initialUsers = [

    {   userName: "RayDemo",
        userPassword: "NLC12345",
        displayName: "Ray",
        profilePic: img1,
        contactList: [
            {
                profileImg : img2, 
                contactName : "Robbie", 
                lastMsg : "Aw :(", 
                timeStamp : "30/04/2023 16:49",
                conv: [FormatMessage("Yo, you still up for drinks tomorrow?",0,"30/04/2023 16:47"),
                        FormatMessage("No can do.",1,"30/04/2023 16:48"),
                        FormatMessage("Aw :(",0,"30/04/2023 16:49")]
            },
            {   
                profileImg : img3, 
                contactName : "Adam", 
                lastMsg : "...Why do I bother?", 
                timeStamp : "30/04/2023 10:30", 
                conv: [FormatMessage("I do hope you didn't forget about your previous commitments.",0,"30/04/2023 10:21"),
                        FormatMessage("Umm...",1,"30/04/2023 10:29"),
                        FormatMessage("...Why do I bother?",0,"30/04/2023 10:30")]

            },
            {
                profileImg : img4, 
                contactName : "Chris", 
                lastMsg : "So I take it you overslept again? Typical.", 
                timeStamp : "29/04/2023 06:48",
                conv: [FormatMessage("I'm at the entrance, hurry up already.",0,"29/04/2023 06:29"),
                FormatMessage( "So I take it you overslept again? Typical.",0,"29/04/2023 06:48")]

        
            },
            {
                profileImg : img5, 
                contactName : "Darin", 
                lastMsg : "For the last time - I don't know you! Leave me alone!", 
                timeStamp : "28/04/2022 21:19",
                conv: [FormatMessage("Have you ever considered the possibility that everything you've "
                 + "ever had was never rightfully yours to begin with?",0,"28/04/2022 20:25"),
                FormatMessage("For the last time - I don't know you! Leave me alone!", 1,"28/04/2022 21:19")]
  
            }
]
}
];

export default initialUsers;