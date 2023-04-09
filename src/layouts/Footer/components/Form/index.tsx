import { useEffect, useState } from "react";
import {
    GenericButton,
    GenericInput,
    GenericTextArea,
} from "../../../../components/generics";
import * as S from "../../style";
import useAxios from "../../../../hooks/useAxios";

const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const { data, error, loading, request } = useAxios();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = { name, email, subject, message };
        await request({ url: "/newMessage", method: "POST", body });
    };

    useEffect(() => {
        if (data) {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
        if (error) {
        }
    }, [error, data]);
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
                cols={30}
                rows={10}
                onChange={e => setMessage(e.target.value)}
            />
            <GenericButton disabled={loading ? true : false} type="submit">
                Enviar
            </GenericButton>
        </S.Form>
    );
};

export default Form;
