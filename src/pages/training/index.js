import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
//
// import { add, minus, asyncAdd } from '../../actions/counter'
//
// import './index.scss'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
class Training extends Component {

    config = {
    navigationBarTitleText: '练习'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  startTraining () {
    Taro.navigateTo({
      url: '/pages/practice/practice'
    });
  }
  render () {
    return (
      <View className='index'>
        <Button onClick={this.startTraining}>开始</Button>
      </View>
    )
  }
}

export default Training
