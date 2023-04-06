import { useState } from "react";
import {
    GenericButton,
    GenericInput,
    GenericTextArea,
} from "../../../../components/generics";
import * as S from "../../style";

const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { name, email, subject, message };
        console.log(data)
    };
    return (
        <S.Form onSubmit={handleSubmit}>
            <GenericInput
                required
                value={name}
                placeholder="Digite seu nome e sobrenome"
                type="text"
                onChange={e => setName(e.target.value)}
            />
            <GenericInput
                required
                value={email}
                placeholder="Digite seu e-mail"
                type="email"
                onChange={e => setEmail(e.target.value)}
            />
            <GenericInput
                required
                value={subject}
                placeholder="Digite o assunto"
                type="text"
                onChange={e => setSubject(e.target.value)}
            />
            <GenericTextArea
                required
                value={message}
                placeholder="Sua mensagem..."
                name=""
                id=""
                cols={30}
                rows={10}
                onChange={e => setMessage(e.target.value)}
            />
            <GenericButton type="submit">Enviar</GenericButton>
        </S.Form>
    );
};

export default Form;
