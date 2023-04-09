import { useEffect, useState } from "react";
import * as G from "../../../../components/generics";
import * as S from "../../style";
import useAxios from "../../../../hooks/useAxios";
import { ToastContainer, toast } from "react-toastify";

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
            toast.success(
                "Mensagem enviada com sucesso 😄 \n Retornarei em breve",
                {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            );
        }
        if (error) {
            toast.error(
                "Houve um erro durante o envio de sua mensagem 😞 \n Tente novamente mais tarde ou entre em contato de outra forma",
                {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            );
        }
    }, [error, data]);
    return (
        <>
            <S.Form onSubmit={handleSubmit}>
                <G.GenericInput
                    required
                    value={name}
                    placeholder="Digite seu nome e sobrenome"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
                <G.GenericInput
                    required
                    value={email}
                    placeholder="Digite seu e-mail"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <G.GenericInput
                    required
                    value={subject}
                    placeholder="Digite o assunto"
                    type="text"
                    onChange={e => setSubject(e.target.value)}
                />
                <G.GenericTextArea
                    required
                    value={message}
                    placeholder="Sua mensagem..."
                    cols={30}
                    rows={10}
                    onChange={e => setMessage(e.target.value)}
                />
                <G.GenericButton
                    disabled={loading ? true : false}
                    type="submit"
                >
                    Enviar
                </G.GenericButton>
            </S.Form>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Form;
