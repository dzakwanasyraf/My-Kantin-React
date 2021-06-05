import React, { Component } from 'react';
import Swal from 'sweetalert';
import '../../App.css';

class Pesanan extends Component {
  

  render() {
    return(
      <div className="container pesanan">
        <div className="row">
          <h3>Pesanan Saya</h3>
          <div className="balance">
            <span className="nama">Mr. Dzakwan</span>
            <span className="saldo">2.000.000</span>
            <span className="id">0034355717</span>
          </div>
        </div>
        <div className="row">
            <div className="checkout">
              <div className="imgBrand">
                <img/>
              </div>
              <span className="font-weight-bold">2</span>
              <span className="font-weight-bold">x</span>
              <span className="font-weight-bold">Sate Padang</span>
              <span className="font-weight-medium">Rp. 50.000</span>
              <button><i class="fas fa-times fa-large"></i></button>
            </div>
        </div>
        <div className="row">
            <div className="checkout">
              <div className="imgBrand">
                <img/>
              </div>
              <span className="font-weight-bold">1</span>
              <span className="font-weight-bold">x</span>
              <span className="font-weight-bold">Ayam Kremes</span>
              <span className="font-weight-medium">Rp. 25.000</span>
              <button><i class="fas fa-times fa-large"></i></button>
            </div>
        </div>
        <div className="row">
            <div className="checkout">
              <div className="imgBrand">
                <img/>
              </div>
              <span className="font-weight-bold">1</span>
              <span className="font-weight-bold">x</span>
              <span className="font-weight-bold">Ikan Bakar</span>
              <span className="font-weight-medium">Rp. 30.000</span>
              <button><i class="fas fa-times fa-large"></i></button>
            </div>
        </div>
        <div className="row">
          <div className="alamat">
          <i class="fas fa-car"></i>
          <span>Jakarta</span>
          <span>Bayar</span>
          </div>
        </div>
        <div className="row">
          <div className="bayar">
            <span>Total</span>
            <span>Rp. 155.000</span>
          </div>
        </div>
        <div className="row final">
          <button type="button" onClick={this.onClear} className="btn btn-warning btn-pesan">Pesan</button>
        </div>
      </div>
    );
  }
}
export default Pesanan;