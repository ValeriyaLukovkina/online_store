import { connect } from "react-redux";
import App from "./App";
import { initializeApp } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.inintialized
})

export default connect(mapStateToProps, { initializeApp })(App)