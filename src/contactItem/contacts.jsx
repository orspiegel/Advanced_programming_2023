import img2 from './contactsImg/Robbie_ProfPic.jpg'
import img3 from './contactsImg/Adam_ProfPic.jpg'
import img4 from './contactsImg/Chris_ProfPic.jpg'
import img5 from './contactsImg/Darin_ProfPic.jpg'
import SingleMessage from '../RightScreen/SingleMessage'


const contacts = [
    {
        profileImg : img2, 
        contactName : "Robbie", 
        conv: [],
        lastMsg : "e",
        timeStamp : "30/04/2023 4:47PM"
    },
    {   
        profileImg : img3, 
        contactName : "Adam", 
        lastMsg : "I hope you didn't forget about your previous commitments.", 
        timeStamp : "30/04/2023 10:30AM", 
        conv: ["Hi", "FOO."]
    },
    {
        profileImg : img4, 
        contactName : "Chris", 
        lastMsg : "So I take it you overslept again? Typical.", 
        timeStamp : "29/04/2023 6:48AM",
        conv: ["halo", "TESTTTSSS", "BYE"]

    },
    {
        profileImg : img5, 
        contactName : "Darin", 
        lastMsg : "For the last time - I don't know you!", 
        timeStamp : "28/04/2022 21:19PM",
        conv: ["BYE"]    
    }
];

export default contacts;