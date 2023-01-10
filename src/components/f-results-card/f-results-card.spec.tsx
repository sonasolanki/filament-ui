import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FResultsCard } from './f-results-card';

describe('f-results-card', () => {
    //Define any configs, props here
    it('renders', async () =>{
        const { root } = await newSpecPage({
            components: [FResultsCard],
            template: () => <f-results-card></f-results-card>
        });
        expect(root).toEqualHtml(`
            <f-results-card>
                <div class="f-results-card">
                    f-results-card
                </div>
            </f-results-card>
        `)
    })
})