"use client";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  message: string;
}

export default function ButtonClient({ message }: ButtonProps) {
  const handleClick = () => {
   
  };

  return <Button onClick={handleClick}> {message}</Button>;
}
