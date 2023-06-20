import { Suspense, useEffect } from 'react';
import Header from './components/Header/Header';
import Departaments from './components/Departaments/Departaments';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchTechs } from './redux/techs/techsOperations';
import TechStack from './components/TechStack/TechStack';

function App() {
    let location = useLocation();
    const dispatch = useDispatch();
    const departs = ['backend', 'frontend', 'pm', 'qa', 'design'];

    useEffect(() => {
        if (departs.some(dep => `/${dep}` === location.pathname)) {
            dispatch(fetchTechs(location.pathname.slice(1)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <Suspense fallback={'Loading...'}>
            <Header />
            <Departaments departs={departs} />
            {departs.some(dep => `/${dep}` === location.pathname) && (
                <TechStack />
            )}
        </Suspense>
    );
}

export default App;
