import ContactItem from "../contactItem/ContactItem";

function ContactListLeftSide({contacts}) {
    const contactsList = contacts.map((contact, key)=> {
        return <ContactItem {...contact} key={key}></ContactItem>
    });

    return (
        <div className="chatList-contactList text">
            {contactsList}
        </div>
    )

}
export default ContactListLeftSide;