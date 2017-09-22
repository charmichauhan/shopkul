/**
 * MIT License
 *
 * Copyright (c) 2016 InSoft Engineering / github.com/insoftpub
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component } from 'react';
import Icon from '../../Icon';

const viewBox = {
    x: 0,
    y: 0,
    width: 97.75,
    height: 97.75
};

class Pinterest extends Component {
    render() {
        return (
            <Icon {...this.props} viewBox={viewBox}>
                <path d='M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
                     M54.499,65.109c-4.521,0-8.773-2.444-10.229-5.219c0,0-2.432,9.645-2.943,11.506c-1.813,6.58-7.146,13.162-7.561,13.701
                    c-0.289,0.375-0.928,0.258-0.994-0.24c-0.113-0.838-1.475-9.139,0.127-15.909c0.801-3.4,5.383-22.814,5.383-22.814
                    s-1.334-2.673-1.334-6.625c0-6.205,3.596-10.837,8.074-10.837c3.807,0,5.645,2.859,5.645,6.286c0,3.828-2.436,9.552-3.693,14.856
                    c-1.051,4.441,2.225,8.064,6.605,8.064c7.933,0,13.272-10.188,13.272-22.261c0-9.174-6.176-16.044-17.418-16.044
                    c-12.697,0-20.615,9.471-20.615,20.052c0,3.646,1.078,6.221,2.764,8.21c0.773,0.915,0.883,1.283,0.602,2.333
                    c-0.203,0.771-0.66,2.625-0.854,3.358c-0.279,1.062-1.137,1.44-2.098,1.049c-5.846-2.387-8.572-8.793-8.572-15.994
                    c0-11.893,10.029-26.154,29.922-26.154c15.985,0,26.506,11.566,26.506,23.984C77.089,52.839,67.956,65.109,54.499,65.109z'
                />
            </Icon>);
    }
}

export default Pinterest;
