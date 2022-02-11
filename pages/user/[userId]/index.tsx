import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { NavLayout } from "../../../components/NavLayout";
import { IUser } from "../../../interfaces/IUser";

export const getServerSideProps: GetServerSideProps<{ user: IUser }> = async ({ params }) => {
    const user: IUser = {
        balance: 500,
        id: parseInt(params.userId as string),
        username: "Urtyom_Alyanov",
        vkId: 578425189,
        desc: "dsdfsdf",
        img: "https://sun9-84.userapi.com/impg/LQ-OeC_cOfp3HxmoYI5Smx89emfT5cKKQJCFtw/8TEILy0nF64.jpg?size=1880x1600&quality=95&sign=70aa434db5cbd049a562f2ca4d383755&type=album",
        nick: "Уртём Альянов"
    };
    
    return {
        props: { user }
    };
};

const UserPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
    const {user} = props;

    if(!user) {
        return(<></>);
    }

    return (
        <>
            <Head>
                <title>{user.nick || user.username} | НБМ</title>
            </Head>
            <NavLayout>
                <div className="col-md-6">
                    {user.id}
                </div>
            </NavLayout>
        </>
    );
};

export default UserPage;