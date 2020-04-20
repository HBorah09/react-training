import { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Title, Container } from '../components/styles';
import { Content, Meta } from '../components/react';
import { texts } from '../utils/constants';
import theme from '../utils/theme';
import { loadData, filterCharacters, sortIds, searchNames } from '../redux/actions/actions'

class App extends Component {
  static getInitialProps = async props => {
    const { store, isServer } = props.ctx
    if (!store.getState().results) {
      store.dispatch(loadData())
    }
    return { isServer }
  }

  render() {
    const { results, filters, error } = this.props;
    return (
      error ? `${texts.error}` : (
        <ThemeProvider theme={theme}>
          <Meta />
          <Container className="container">
            <Title>{texts.title}</Title>
            <Content filterCharacters={this.props.filterCharacters} data={results}
              filters={filters} sortIds={this.props.sortIds}
              searchNames={this.props.searchNames}
            />
          </Container>
        </ThemeProvider>
      )
    )
  }
}

const mapStateToProps = ({ results, order, filters, error }) => ({
  results, order, filters, error
})

const mapDispatchToProps = { filterCharacters, sortIds, searchNames };

export default connect(mapStateToProps, mapDispatchToProps)(App)
