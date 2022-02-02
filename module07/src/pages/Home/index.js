import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from "../../services/api";

import * as CartActions from "../../store/modules/cart/actions";

import { ProductList } from "./styles";

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get("products")

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };


  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        { products.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => this.handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>

      /*
      return (
        <ProductList>
          <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/44/3ZP-1122-444/3ZP-1122-444_detalhe1.jpg?ts=1634575547?ims=280x280" alt="Tênis" />
            <strong>Tênis muito legal</strong>
            <span>R$ 129,90</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        </ProductList>
        */
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
