import{aB as p,o as n,b as m,w as h,j as i,g as t,aa as e,ad as l,e as o,v as u,x as b,C as r}from"./modules/vue-wGpoZTaK.js";import{_ as g}from"./default-CG_a1yBQ.js";import{u as x,f as v}from"./slidev/context-B1yQRcCc.js";import{_}from"./index-DCT6NxVY.js";import"./modules/shiki-B-vc57UP.js";const f={class:"text-lg mt-5"},$={class:"text-lg mt-5"},w={class:"mt-10 mx-auto px-6 py-4 rounded-xl text-center text-xl",style:{background:"rgba(37,99,235,0.14)","max-width":"52rem"}},k={__name:"thesis_web.md__slidev_2",setup(y){const{$clicksContext:c,$frontmatter:d}=x();return c.setup(),(z,s)=>{const a=p("click");return n(),m(g,u(b(r(v)(r(d),1))),{default:h(()=>[i(` # Machine Learning

<div class="text-base mt-3">

**Learning from data:** observe examples, generalize to the unseen — replacing hand-crafted rules.

</div>

<div class="text-base mt-3" v-click>

**Supervised learning:** From labeled examples $\\{(x_i, y_i)\\}_{i=1}^N$, fit a parameterized model $f(\\,\\cdot\\,;\\theta)$, $\\theta \\in \\mathbb{R}^p$, to generalize to new data from a distribution $\\rho$.

</div>

<div class="text-base mt-3" v-click>

**Empirical Risk Minimization:**

$$ \\min_{\\theta \\in \\mathbb{R}^p} \\frac{1}{N}\\sum_{i=1}^{N} \\mathcal{L}\\big(f(x_i;\\theta),\\, y_i\\big) $$

</div>

<div class="grid grid-cols-2 gap-10 mt-3 text-base" v-click>

<div>

<span class="hl">How</span> to solve it? &nbsp;—&nbsp; <span class="text-blue-600 font-bold">Optimization</span>

<span class="text-sm opacity-80">$p$ in billions $\\Rightarrow$ first-order **GD / SGD**</span>

</div>

<div>

<span class="hl">What</span> it learns? &nbsp;—&nbsp; <span class="text-blue-600 font-bold">Statistics</span>

<span class="text-sm opacity-80">generalization to the population $\\rho$, not just the data</span>

</div>

</div>

<!-- <div class="text-sm mt-4 text-center opacity-80" v-click>

…and these two are <span class="text-blue-600 font-semibold">not independent</span> — which solution we reach, and whether it generalizes, is decided along the way.

</div> `),i("  "),i(" --- "),s[3]||(s[3]=t("h1",null,"A Deep Learning Approach for Machine Learning",-1)),s[4]||(s[4]=t("div",{class:"text-lg mt-6"},[t("p",null,[t("span",{class:"text-blue-600"},"▸"),e(" The "),t("strong",null,"bitter lesson"),e(),t("span",{class:"opacity-60 text-base"},"(Sutton)"),e(" — general methods that just "),t("strong",null,"scale"),e(" compute win.")])],-1)),l((n(),o("div",f,[...s[0]||(s[0]=[t("p",null,[t("span",{class:"text-blue-600"},"▸"),e(" Scaling is the engine — but progress ran on "),t("strong",null,"frictionless reproducibility"),e(),t("span",{class:"opacity-60 text-base"},"(Donoho)"),e(": shared data, code, and benchmarks let countless "),t("strong",null,"design choices"),e(" be tried and selected.")],-1)])])),[[a]]),l((n(),o("div",$,[...s[1]||(s[1]=[t("p",null,[t("span",{class:"text-blue-600"},"▸"),e(" These "),t("strong",null,"architectural & algorithmic choices"),e(" — initialization scale, step size, SGD vs. GD — place training in a regime that learns rich representations.")],-1)])])),[[a]]),l((n(),o("div",w,[...s[2]||(s[2]=[t("p",null,[e("A theory of deep learning must account for "),t("strong",null,[t("span",{class:"text-blue-600"},[e("how these choices regulate "),t("span",{class:"hl"},"how"),e(" and "),t("span",{class:"hl"},"what"),e(" the model learns.")])])],-1)])])),[[a]])]),_:1},16)}}},L=_(k,[["__scopeId","data-v-5bc34811"]]);export{L as default};
