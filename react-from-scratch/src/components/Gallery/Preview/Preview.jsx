import ListItem from "../../List/ListItem/ListItem";
import Link from "../../Link/Link";
import Img from "../../Img/Img";
import Div from "../../Div/Div";

const Preview = ({ anchor, imgSrc, imgAlt }) => {
    const anchorWithHash = '#' + anchor;

    return (
        <ListItem>
            <Link href={anchorWithHash}>
                <Div>
                    <Img src={imgSrc} alt={imgAlt} />
                </Div>
            </Link>
        </ListItem>
    )
}

export default Preview;