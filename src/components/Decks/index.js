import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateDeck from "./CreateDeck/index";
import Deck from "./Deck/index";

function Decks() {
  return (
    <div>
    <Switch>
      <Route path="/decks/new">
        <CreateDeck />
      </Route>
      <Route path="/decks/:deckId">
        <Deck />
      </Route>
    </Switch>
      </div>
  );
} 

export default Decks;