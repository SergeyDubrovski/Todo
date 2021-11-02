import { connect } from "react-redux";
import GetList from "./GetLiist";
import { actionGetList } from "../../redax/reducers/taskDayReducer";

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => {
  return {
    getList: (list) => {
      dispatch(actionGetList(list));
    },
  };
};

const GetListContainer = connect(mapStateToProps, mapDispatchToProps)(GetList);
export default GetListContainer;
