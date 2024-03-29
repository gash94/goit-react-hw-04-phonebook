import React from "react";
import PropTypes from "prop-types";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <>
            <ul className={css.list}>
                {contacts.map(({ id, name, number }) => (
                    <li className={css.item} key={id}>
                        {name}: <b>{number}</b>
                        <button
                            className={css.button}
                            onClick={() => deleteContact(id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func,
};

export default ContactList;
