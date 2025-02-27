import React, { createContext, useContext, useState } from "react";

const TradeContext = createContext();

export function TradeProvider({ children }) {
  const [trades, setTrades] = useState([
    {
      id: 1,
      user: "Sarah Chen",
      offering: "Web Development",
      seeking: "Photography",
      experience: "3 years",
      location: "San Francisco",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/150?img=2",
      description: "Experienced web developer looking to learn photography",
    },
    {
      id: 2,
      user: "Mike Johnson",
      offering: "Guitar Lessons",
      seeking: "Spanish Language",
      experience: "5 years",
      location: "New York",
      rating: 4.8,
      avatar: "https://i.pravatar.cc/150?img=3",
      description: "Professional guitarist offering lessons",
    },
  ]);

  const addTrade = (newTrade) => {
    setTrades((prevTrades) => [
      {
        id: Date.now(),
        rating: 5.0, // Default rating for new trades
        avatar: "https://i.pravatar.cc/150?img=1", // Default avatar
        ...newTrade,
      },
      ...prevTrades,
    ]);
  };

  return (
    <TradeContext.Provider value={{ trades, addTrade }}>
      {children}
    </TradeContext.Provider>
  );
}

export function useTrade() {
  return useContext(TradeContext);
}
