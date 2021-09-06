import { useState } from "react";

const DEFAULT_LENGTH = 450;

export interface IReadMore {
    length?: number;
    content?: string;
}

const ReadMore = (props: IReadMore) => {
    const { content, length } = props;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const collapseText = (text?: string) => {
        return text?.slice(0, length || DEFAULT_LENGTH);
    }

    return (
        <p>
            {isReadMore ? collapseText(content) : content}
            <a onClick={toggleReadMore} href="/#showMore"> {isReadMore ? "...Read more" : " Show Less"} </a>
        </p>
    );
}

export default ReadMore;