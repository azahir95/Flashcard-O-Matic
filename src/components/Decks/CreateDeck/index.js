import React from "react";
import DeckForm from "./../DeckForm";
import Breadcrumb from "./Breadcrumb";

function CreateDeck() {

  return (
    <div>
      <Breadcrumb />
      <h1>Create Deck</h1>
      <DeckForm />
    </div>
  ); 
}

export default CreateDeck;