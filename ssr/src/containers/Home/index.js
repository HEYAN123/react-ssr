import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from './store/action';

class Home extends Component {
    render() {
        const { list } = this.props;
        return list.map(v=>
            <div key={v.id}>{v.title}</div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.home.list,
})

const mapDispatchToProps = dispatch => ({
    getList() {
        dispatch(getList());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);