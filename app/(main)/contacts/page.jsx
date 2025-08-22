"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const ContactsPage = () => {
    useQuery(api.contacts.getAllContacts);
    return <div>ContactsPage</div>
};

export default ContactsPage;
