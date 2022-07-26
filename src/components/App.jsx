import { ContactForm } from './Form/Form';
import Contacts from './Contacts/Contacts';

import { Section, Title } from './App.styled';
import Filter from './Filter/Filter';
import { getfilterContacts, getItems } from 'redux/contacts-selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getItems);
  const filterContacts = useSelector(getfilterContacts);

  return (
    <>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
      </Section>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {filterContacts.length === 0 ? (
          <p>
            There is no contact
            {!!contacts.length ? ' with this name' : ''}!
          </p>
        ) : (
          <Contacts />
        )}
      </Section>
    </>
  );
};
