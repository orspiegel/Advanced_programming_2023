import ContactItem from "../contactItem/ContactItem";

function ContactListLeftSide({contacts, onSwitch}) {
    const contactsList = contacts.map((contact, key)=> {
        return <ContactItem {...contact} key={key} onAction={onSwitch}></ContactItem>
    });

    return (
        <div className="chatList-contactList text">
            {contactsList}
        </div>
    )
}
export default ContactListLeftSide;