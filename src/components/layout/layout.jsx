import React from 'react';
import Header from '../header/header';
import Content from '../content';
import {Switch, Route} from 'react-router-dom';
import Pesanan from '../kalkulator/kalkulator';
function Layout() {
    return (
        <React.Fragment>
            <div className="h-screen w-screen pl-8 font-poppins">
                <header className="h-1/10 w-full flex items-center">
                    <Header/>
                </header>
                <main className="h-9/10 w-full flex">
                    <section className="w-4/6 h-full">
                        <Content/>
                    </section>
                    <section className="w-2/6 h-full" style={{background: 'rgba(252, 252, 252, 0.9)'}}>
                        <Pesanan/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Layout;