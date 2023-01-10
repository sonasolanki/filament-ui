import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FRating } from './f-rating';

describe('f-rating', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FRating],
            template: () => <f-rating></f-rating>
        });
        expect(root).toEqualHtml(`
            <f-rating>
                <div class="f-rating">
                    f-rating
                </div>
            </f-rating>
        `)
    })
})