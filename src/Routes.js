import { Route, Switch } from 'react-router-dom';
import IndexModal from './components/modal';
import IndexProduct from './components/Product';
const BaseRouter = () => (
	<>
		<Switch>
			<Route exact path="/Product" component={IndexProduct} />
			<Route exact path="/Modal" component={IndexModal} />
		</Switch>
	</>
);

export default BaseRouter;
