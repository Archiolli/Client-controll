"use client";
import { GoLaw } from "react-icons/go";
import Container from "../Container";

export default function Home() {
    return (
        <Container>
            <div className="h-full w-full justify-center items-center flex">
                <GoLaw className="h-52 w-52" />
            </div>
        </Container>
    );
}