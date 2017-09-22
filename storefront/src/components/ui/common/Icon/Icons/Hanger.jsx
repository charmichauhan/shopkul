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
import Icon from '../Icon';

const viewBox = {
    x: 0,
    y: 0,
    width: 315,
    height: 315
};

class Hanger extends Component {
    render() {
        return (
            <Icon {...this.props} viewBox={viewBox}>
                    <path d='m301.952,202.988l-114.422-65.263c-6.537-3.755-14.663-6.248-23.03-7.158v-7.932c12.986-3.154
                        22.656-14.88 22.656-28.822 0-16.352-13.304-29.656-29.656-29.656s-29.656,13.304-29.656,29.656c0,3.866
                        3.134,7 7,7 3.866,0 7-3.134 7-7 0-8.633 7.023-15.656 15.656-15.656s15.656,7.023
                        15.656,15.656-7.023,15.656-15.656,15.656c-3.866,0-7,3.134-7,7v14.097c-8.368,0.909-16.484,3.397-22.994,7.14l-114.296,65.189c-8.148,4.503-13.21,13.082-13.21,22.386
                        0,14.096 11.467,25.563 25.563,25.563h263.874c14.096,0
                        25.564-11.467 25.564-25.563-0.001-9.306-5.032-17.867-13.049-22.293zm-12.516,33.856h-263.873c-6.376,0-11.563-5.187-11.563-11.563
                        0-4.211 2.292-8.094 6.063-10.18l114.398-65.247c2.317-1.332 10.828-5.679 23.038-5.679 12.203,0 20.734,4.354 23.077,5.699l114.523,65.321c3.639,2.01
                        5.899,5.874 5.899,10.085 0.002,6.377-5.185,11.564-11.562,11.564z'
                    />
            </Icon>);
    }
}

export default Hanger;
