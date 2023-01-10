import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FAccordion } from './f-accordion';

describe('f-accordion', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FAccordion],
            template: () => <f-accordion></f-accordion>
        });
        expect(root).toEqualHtml(`
            <f-accordion>
                <div class="f-accordion">
                    f-accordion
                </div>
            </f-accordion>
        `)
    })
})