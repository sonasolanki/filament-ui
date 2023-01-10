import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FAccordionItem } from './f-accordion-item';

describe('f-accordion-item', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FAccordionItem],
            template: () => <f-accordion-item></f-accordion-item>
        });
        expect(root).toEqualHtml(`
            <f-accordion-item>
                <div class="f-accordion-item">
                    f-accordion-item
                </div>
            </f-accordion-item>
        `)
    })
})