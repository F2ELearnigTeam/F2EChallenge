import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

const IntroBase = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1b447c;
`;

const Description = styled.div`
    width: 40%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ececec;
    font-weight: 900;
    font-size: 32px;
    cursor: pointer;
    border-radius: 16px;
    border: 2px solid #f6d006;
`;

export const Intro = () => {
    const [description, setDescription] = useState("這是展示頁");
    const count = useRef(0);
    const switchDialogue = () => {
        const dialogueMap: { [key: number]: string } = {
            1: "Don't touch Me!!",
            2: "I say don't touch Me!!",
            3: "I will call the police!!!!",
            4: "Help!!!!",
            5: "Police! Hands up!!!",
            6: "You have the right to remain silent.",
            7: "Anything you say can and will be used against you in a court of law.",
            8: "You have the right to talk to a lawyer and have him present while you are questioned.",
            9: "If you cannot afford to hire a lawyer, one will be appointed to represent you before questioning, if you wish one.",
        };
        console.info(count.current);
        count.current = count.current + 1;
        if (count.current <= 9) {
            setDescription(dialogueMap[count.current]);
        } else {
            setDescription("さよなら");
        }
        return null;
    };
    return (
        <IntroBase>
            <Description
                onMouseOver={switchDialogue}
                onMouseLeave={() => setDescription("這是展示頁")}
            >
                {description}
            </Description>
        </IntroBase>
    );
};
