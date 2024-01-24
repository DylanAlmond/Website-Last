import { HomePageWrapper } from './HomePage.styled';
import CardGrid from '../CardGrid/CardGrid.lazy';

const HomePage = () => (
 <HomePageWrapper data-testid="HomePage">
    <CardGrid/>
 </HomePageWrapper>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
