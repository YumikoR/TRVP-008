import React from "react";
import { useParams } from "react-router-dom";
import axios from '../axios'

import { Menu } from "../components/Menu";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";



export const FullMenu = () => {
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);

    const {id} = useParams();

    React.useEffect(() => {
        axios
            .get(`/menu/${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                console.log('DATA!!!!!!!!', res.data)
            })
            .catch((err) => {
                console.warn(err);
                alert('Ошибка при получении меню');
            })
    }, []);

    if(isLoading || !data) {
        return <Menu isLoading={isLoading} isFullMenu />;
    }

  return (
    <>
        <Menu
            id={data._id}
            day={`${data.day}`}
            option={data.option}
            // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
            user={
                data.user
            }
            createdAt={new Date(data.createdAt).toLocaleDateString('ru-RU')}
            dishes={([...data.dishes])}
            // viewsCount={150}
            // commentsCount={3}
            // tags={['react', 'fun', 'typescript']}
            isEditable
        />
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Волос ТМ",
              avatarUrl: "https://rk6.bmstu.ru/media/images/volosatova-web.2e16d0ba.fill-180x180.png",
            },
            text: "Ужасно",
          },
          {
            user: {
              fullName: "Труд В.",
              avatarUrl: "https://rk6.bmstu.ru/media/images/trudonoshin-web.2e16d0ba.fill-180x180.png",
            },
            text: "Это меню топчик",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>


  );
};
