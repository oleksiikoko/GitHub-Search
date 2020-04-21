import "styles/ItemTopics.global.scss";

interface IProps {
  topics: string[];
}

const ItemTopics: React.FC<IProps> = ({ topics }) => {
  return (
    <div className="topics">
      {topics.map((topic) => {
        return (
          <a href={`https://github.com/topics/${topic}`}>
            <div className="topics__topic">{topic}</div>
          </a>
        );
      })}
    </div>
  );
};

export default ItemTopics;
