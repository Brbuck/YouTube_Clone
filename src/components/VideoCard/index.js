
import { Container, Thumbnail, Info, Avatar, Box } from './styles';

function VideoCard() {
    return (
        <Container>
            <Thumbnail src='https://i.ytimg.com/an_webp/R3S8DEzEn6s/mqdefault_6s.webp?du=3000&sqp=CMeIkooG&rs=AOn4CLBMc5UQqpm9eeP2bkiQxDV9YbcYnA' />
            <Info>
                <Avatar src='https://yt3.ggpht.com/ytc/AKedOLQkXnYChXAHOeBQLzwhk1_BHYgUXs6ITQOakoeNoQ=s68-c-k-c0x00ffffff-no-rj' />
                <Box>
                    <strong>Utilizando Styled Components (CSS-in-JS) no ReactJS e React Native | Diego Fernandes</strong>
                    <span>Roctetseat</span>
                    <span>74 mil visualizações - há 2 anos</span>
                </Box>
            </Info>

        </Container>
    );
}

export default VideoCard;