import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactStats.module.css';

export default function ContactStats() {
    
    const contacts = useSelector(selectFilteredContacts);
    const count = contacts.reduce((acc,contact) => {
        if(contact.number) {
            acc.contacts += 1;
        }
        return acc;
    },{
        contacts: 0
    });
    
    console.log(count);
    return(
        <div className={css.counterContainer}>
            <div>ContactStats</div>
            <div>Number of contacts: {count.contacts}</div>
        </div>
    )

}