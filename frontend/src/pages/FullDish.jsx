
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

import { Dish } from '../components/Dish';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';

export const FullDish = () => {
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);

    const { id } = useParams();

    React.useEffect(() => {
        axios
            .get(`/dishes/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log('DISH DATA!!!!!!!!', res.data);
            })
            .catch((err) => {
                console.warn(err);
                alert('Ошибка при получении блюда');
            });
    }, [id]);

    if (isLoading || !data) {
        return <Dish isLoading={isLoading} />;
    }

    return (
        <>
            <Dish
                id={data._id}
                name={data.name}
                type={data.typeId.name}
                user={data.user}
                createdAt={new Date(data.createdAt).toLocaleDateString('ru-RU')}
                avatarUrl={data.avatarUrl}
                isLoading={isLoading}
                isEditable
            />
            <CommentsBlock

            >
                <Index />
            </CommentsBlock>
        </>
    );
};
