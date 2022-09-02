import React from 'react';
import Header from './components/header/Header'
import './Main.css'


class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Header />
                <main className="Main-text">
                    <div className="main-bit-of-text">
                        <h1 className='annualising'> 
                            Annualising Monthly Rental Payments
                        </h1>
                        <h3 className='description'>
                            zing enables landlords to access future rent with no hidden costs or up-front fees, directly deposited into your bank account
                        </h3>
                    </div>
                    <div className="calculator">
                        <h2 className='text-above-calc'>Find out how much you can get:</h2>
                        <form>
                            <div>
                                <label className='first-input' for='month'>Monthly rent amount: 
                                    <input id='month' className='first-input-input' type='text'/>
                                </label>
                            </div>
                            <br></br>
                            <div className='pull-down'>
                                <label>Years of rent: 
                                    <select>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </label>
                            </div>
                            <br></br>
                            <div className='submit-btn'>
                                <button type='submit'>find out</button>
                            </div>
                        </form>
                    </div>
        
                </main>
                <footer className="footer">
                    <p>
                        zing
                    </p>
                    <div className="flex -mx-6">
                        <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a>
                        <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>
                        <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Main