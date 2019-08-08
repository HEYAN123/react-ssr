import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from './store/action';

class Home extends Component {
    // 这里是客户端数据获取
    componentDidMount() {
        // 如果已经在服务端获取过了客户端不再获取
        if(!this.props.list.length) this.props.getHomeList();
        console.log('home');
    }
    
    render() {
        const { list } = this.props;
        return list.map(v=>
            <div key={v}>{v} get home page</div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.home.list,
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getList());
    }
})
// 服务器端获取
Home.loadData = (store)=>{
    console.log('list')
    store.dispatch(getList());
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);