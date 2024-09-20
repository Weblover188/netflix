import{r,j as e}from"./react-C4f1YoUf.js";import{c as I}from"./react-dom-D46hNbU1.js";import"./firebase-DCdP6M8q.js";import{i as B,g as b,a as N,c as E,b as v,d as C,s as M,e as R,o as F}from"./@firebase-D7hNvhUj.js";import{B as h,Q as W}from"./react-toastify-Vu7e6LFv.js";import{L as U,B as k}from"./react-router-dom-CJdHCj9K.js";import{d as D,a as u,e as y,f as p}from"./react-router-BPiWTTo1.js";import"./scheduler-CzFDRTuY.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./clsx-B-dksMZM.js";import"./@remix-run-I3CLtn5C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const A of s)if(A.type==="childList")for(const a of A.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const A={};return s.integrity&&(A.integrity=s.integrity),s.referrerPolicy&&(A.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?A.credentials="include":s.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function c(s){if(s.ep)return;s.ep=!0;const A=o(s);fetch(s.href,A)}})();const j="/netflix/assets/logo-COGC8jhl.png",Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M416%20208c0%2045.9-14.9%2088.3-40%20122.7L502.6%20457.4c12.5%2012.5%2012.5%2032.8%200%2045.3s-32.8%2012.5-45.3%200L330.7%20376c-34.4%2025.2-76.8%2040-122.7%2040C93.1%20416%200%20322.9%200%20208S93.1%200%20208%200S416%2093.1%20416%20208zM208%20352a144%20144%200%201%200%200-288%20144%20144%200%201%200%200%20288z'/%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M224%200c-17.7%200-32%2014.3-32%2032V51.2C119%2066%2064%20130.6%2064%20208v25.4c0%2045.4-15.5%2089.5-43.8%20124.9L5.3%20377c-5.8%207.2-6.9%2017.1-2.9%2025.4S14.8%20416%2024%20416H424c9.2%200%2017.6-5.3%2021.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5%20322.9%20384%20278.8%20384%20233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0%2096c61.9%200%20112%2050.1%20112%20112v25.4c0%2047.9%2013.9%2094.6%2039.7%20134.6H72.3C98.1%20328%20112%20281.3%20112%20233.4V208c0-61.9%2050.1-112%20112-112zm64%20352H224%20160c0%2017%206.7%2033.3%2018.7%2045.3s28.3%2018.7%2045.3%2018.7s33.3-6.7%2045.3-18.7s18.7-28.3%2018.7-45.3z'/%3e%3c/svg%3e",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE+UlEQVRYw42X32scVRTHP+fMZDebbNJuEmza2jbBVtKKBQXBVsXigw99EKSI7yLFxwoiiNCXKgiCIvgi6pPaf8AnEXyqlhZBa9HSktbWQmvS/HCTdLOT3Znjw8xs7t6dbXphmHvn3vM953zPj5mRyqk7Rj4ku5sz90e+597xzvt7RZjZftijuGiNJ+gAFCruZ5j7PLtrl7A/94V9r+gFxDxDKMBy8PSBNG7FRj8ji2SK8Cw3wPXOt5wtAP2R0H8UyGihQBHNW7HjJ+aDktRxuisHBIgNtgewO4SKQGKObL/K8IGzWwKUFXYHUFNIxIHohCBXLtAEJgO4G8HsghEZbFPY8HUXhcljrQWMCIjB7KJxpwmTmuoQhxXNgVoGOwP4Z8U4/ojywUtl2gbzEYxpykwPrX7GZ2sDtissbMByDGeOlXl1l3KrbuxSaDnnwxxgUuB2w3jzYMinb01QrSivH4s48MkSkcGQQNN6Pe1JYKDsxPbPUzUOTQ+yHiW89/Uin11usa+qzMcpkGoAKlArCfxnvHZkiGpFaUYJ+/eUOX24RH3FGAvTcyqgmirorLNY5s9qCnNrxqmDIYemB4k2jEpZOXF0CJaNbWF2VtMLFWgkBiPChWsRAINlZXk15qebLRgVGlagXJ27Qu7MOkBV+OF2zL3lNuVSSs3FqxGMCk3bND4MJN2cj2GqJpw+v0Fsizyzv8R355ucWzSmqsJSGwL1qHfneXgU1g32hXBlzTj5xRJvPF/h8q0W75+L2FtT5mIINC0JGX/3bieqLWBC4caKwZrBuDJVhqUYBoqakxXMs3XL0lDcioDFBKrC9KiwFEPovE9C16sAWDWYGVMqE1BvGSsJVAIwJ8kkm5trjNeUQoH7BtODsH1fQGywEBulIDuaV0Eg0lPT9SS9EGEg6C33mqYNpmmw2k4bTGdTN+eqmSKFa1Fa82MBtG3TiDD0FPQbubcBcKVusGFQFWaGheFAMCBODMuaS5B10d82DP5NmNmhDAXC35ExomA5A2FupRUrFWdvRIU/VhJ+PjnKcFn5/Mc1vrrRhkaSpXSGlVjHzWd3BrzzcpUTL47w/S9rvHJ2lf2TAQttywwIpEtjJ9QFfT9QoCTcqyccfW6ILw8M8vFqzPU7LW7OtZirJ2y0jWpZ2D0e8vieAR7bVQLg99kmZ39tMj4R0DAIJe1WcvDMXL8Xaw8zRtrlLi0lPDGuvP10mSMzg+zdMUC1ol2icQIL9TaXrkd8e2Gdb2bbMKocLkGUEYaAPPnhvJFRbZ4p7rM8FAkwGsBiC66uJBADw8LxmrKnqgworLWMv+oJF5ey/RHhhYrQSFLl4uDLUx/Nm9vKzXVXCkscIy2zIU3X92O414abcRrDYYW9oTAepv1jPVPsh1WAMFTpm4RFYXDXjQxUFXaW4VGRzndAbOlrPMr7QlCM3b8M/a8c3xj1zpGynT8TgaCAWj/UYagF1DsKuvIg33bB+uRMB0sLnHBGGoIidlywHORhxlafbZ6OtBFtAVZUIQ/KDX+Y9fYWM8eADq1OT8/p7eAWvP1EN5kWn6ncaPdcwS9fGKik1jiHpIAVcwzr53GP7EOEI8w7Uq6k06FwaC/6D6RbrsNA9qDDntNPigwPVbspdylUcQC0F9iVEccY99+gp7qkWy4MJH015q3W/G7lrEW91symkXmiqpew4si6SZUb+j+Y7wjzSYgAMAAAAABJRU5ErkJggg==",L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='10'%20viewBox='0%200%20320%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202023%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z'/%3e%3c/svg%3e",O={apiKey:"AIzaSyCajvYJp7KPjFSCboWj0Etfx6bXasBGqxA",authDomain:"netflix-clone-6039f.firebaseapp.com",projectId:"netflix-clone-6039f",storageBucket:"netflix-clone-6039f.appspot.com",messagingSenderId:"902825019789",appId:"1:902825019789:web:0d1dcd9fbc2bdbb6c8d5c4"},x=B(O),g=b(x),z=N(x),T=async(i,t,o)=>{try{const s=(await E(g,t,o)).user;await v(C(z,"user"),{uid:s.uid,name:i,authProvider:"local",email:t})}catch(c){console.log(c),h.error(c.code.split("/")[1].split("-").join(" "))}},S=async(i,t)=>{try{await M(g,i,t)}catch(o){console.log(o),h.error(o.code.split("/")[1].split("-").join(" "))}},H=async()=>{R(g)},V=()=>{const i=r.useRef();return r.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=80?i.current.classList.add("nav-dark"):i.current.classList.remove("nav-dark")})},[]),e.jsxs("div",{ref:i,className:"navbar",children:[e.jsxs("div",{className:"navbar-left",children:[e.jsx("img",{src:j,alt:""}),e.jsxs("ul",{children:[e.jsx("li",{children:"Home"}),e.jsx("li",{children:"TV Shows"}),e.jsx("li",{children:"Movies"}),e.jsx("li",{children:"News & Popular"}),e.jsx("li",{children:"My List"}),e.jsx("li",{children:"Browse by Language"})]})]}),e.jsxs("div",{className:"navbar-right",children:[e.jsx("img",{src:Z,alt:""}),e.jsx("p",{children:"Childeren"}),e.jsx("img",{src:G,alt:"",className:"icons"}),e.jsxs("div",{className:"navbar-profile",children:[e.jsx("img",{src:X,alt:"",className:"profile"}),e.jsx("img",{src:L,alt:""}),e.jsx("div",{className:"dropdown",children:e.jsx("p",{onClick:()=>{H()},children:"Sign Out from Netflix"})})]})]})]})},Y="/netflix/assets/hero_banner-DUZNtQhX.jpg",P="/netflix/assets/hero_title-CeCXMd-8.png",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVR4nO2dQWoUQRSGPxEjgoIb0aWudRMPEE+RrUuvIN5AUYwuvYJXmLlAsk+vJzBmofRCyKZHnCeBEkREEq3qV/Xq/+DfV30UM/13v5kGIYQQQgghhAjKDvAKOAW+AAfAHe9FReQlYL/lK/ACuOG9uEic/kH0z6yBZ8BV70VGwC6QAdj3XmgPoi1lAex6L7gH0QZsgY/AA++FRxdtKRPwHrjtvYHooi1lBJ4D1703El20payAp8AV7w1FF20ph8Ce96Z6EG2/XKE88t5cD6IN2AAfgLvem4wu2lLOUtW/RcfYjFn3XOnNIUOPld4cs+yp0ptztr1UeqskU/RKb5VljFrprdKsolV6qzxHUSq9NZJF65XeGsq3VOnv0SDWYM5arPTWcNYtVXoLkKGFSm+BsgQeUykWLNtaK70FzVRbpbfgGWup9NZJTrwrvXWWI+CJRBO30lvH2QDv0jC+RFNe+BuJZpaTff6TEp1oJJooea0TTfEvw7fANYmmmGRd3lH2FKuwUFawKjhlBeumEmUF6zYpZQXrxj+dT6dagAx6OEtRwRo3oKxgDdBQVrBGwij/OawhR8oKDvNLXKs0K++n1rmxyjLWMoeRG6skU22TRbnxFrytdVYuN56SlzVX5tx4CB5aqMy5mVPwuqUJ/dzMWZlv0jElBW/0xyjlRS+Ah44HqDpyCz6MUplzk0vwKlplzs3/Ch6jVubc/KvgKXplzs1lBX9Plfm+98Jb47JXErveC26Viwg+7rEy5+bTXwR3XZlzo5cpzMROkn1+sj/r9SBCCCGEEEIIQXv8AGMxL6IG0qwhAAAAAElFTkSuQmCC",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsUlEQVR4nO2dTYwVRRCAO5AsRuRH2HAQFMJK/DuLnBSX6M0Y4wG9CETZ6E0kIfGEeoAlxkREBSGagAQwGi+KR1CPLgLBg5IVFBA8KFzdhbCfqWxtJGa6Z95u95ue2fqSl5DZ96Zqunq6q6uqG+cMwzAMwzAMwzAMwzAMwzAMwwDuBp4H3gI+A04B54BrwKh+rum1k8AR/e5z8ltrwQ4BZgJPAnuBYaaO3OMj4AlghhnE3/D3ADuAP0iH3HtQZJkh/mv45cBOYITucR04ANw/bQ0BzNbeeIP6uKHGn+umE8CzwGXyQYamZ1zbAW4DdnfYODeB09pTB4DVOmzdCfToR/7dp38b0O/Kb8Y6lPU+MMu1EWCpupBVG/0YsB5YOAWZvcAG4LjeswonW+e+Ag9V9G5G9A1ZnkAHeUP2VJzsLwIPujYAPAJcLXngMWA/cFcX9FkMfFpheBKdV7oW9Pyyxj8LPFqDbqsrLPT+buybACwBLpQ84BfA/Bp1nAMcKtFRhs6lroHeTmjCldd/s8sEYEvJkHSiUd5Riaspi58XXGYA60oWhbtcgxZZoZ6fXeP/zwihN+FplzOypC9Z4WYz7JQMRz4uAXe4XAHeDSh/KLKsVcAm/ayKfG/JO/h42+UIcF9gDBVXc04kOfOBbwpkHAXmRXyThwOR1D6XG8AnHoXHYvr5FDf+BF9HlPN4YD7Y6zJMpkjPKGJ/5GGnjGirV+CgR8ZoVvEizWQV8U/M8AKwubT54bXIi0lf7Gi7yyiH6wu07Y4sa3MFA2yKLFNy076AXf05Zk2gF3EzdlSTLg9BKvPewFywJqas2D3kWCJ5RwON/1Uimd924w2frHK/epRbn0jePPF2iho/lhtaIPNFzzOeTSGvU+/HN/wsTCx7pS7CXgUeTixrUWAYWpJSdpliUrFWxCnXMoAznmddW6dSUgJYxE7XMoBdnmd9o06lfDGTja5lAC93I8bVqVJSQVDEY65lMB6aKOJEnUr95lFqWWK5Pbr6vqLhb6mw60ksU2qRijifUm6ZUpK0LiK1BzRYIHMwsUypMSrir5Ryy5SSoFQRqXvjlQKZfyaWOcvzrCMp5eZqgEKmowF8NT8LWmiA3hyHoLom4UKm4yT8o0ep1S00QL9H7FBKuZNdiA200ACv5LgQe7OOUAT1GMAXitiaUu5kg3GnW2iAMzkG42QPbxESuu1tiwEIh6MXp5JbVTlf/cyGFhlgo0fkz6lkdqKcbIIu4niLDPCdR+SHqWR2opzsQPdlxfqabgDCSfn+FDI7VXCGFq0WsacFBtjnESelODNdDniik2hR0+KmGoDxnLcv3rXN5YJ6Qz5FDzTYAIc9oq5nd94E8LGvYWKPlXTBAJLVC4z9SYbWKQGsCJSnD8c8j4HiTSCXI9cenQv0/uj7mKMAvBN4C44knnO2R7z/54Hn2OFyRbd9hnbEb4mYEx7UNyFqThh4PaC/FOTOdjkjp44EHkDG1HUuUxg/V8I37sv1p1wTAD4IGOFGjkZgvPFD21SbU2ym+VNfsmaiN21xmaDDTmh76g+p89ypDsX4nTBf1nxUwdyArz/Bpex8/qrIQRcVDusYlqqzGnTrD7iaE0jd0wOuyWgZeZXjag52o9RbwwtlvX6i8ZOWvXf7TRAXroxR3XHTlyiquS8QMrmVC43v+Z54kZw6UoUxjcHLzpRFU8xkvQR838H5cUO1brrognfkS277GNN87HtaIt6vvXnBLYf2LdRr/fodkfFTh4f2jelhf83ydiaDnDoSyCHUwcXGLLJiAdwuu0sqjsmpuK69Pso5Fo0EWKaNILvqu8WoHl28ou7nz22S3l7RW5oscu9trZ1kI+aY1+ixZ3LMzVT5RaoXdIKu/2iBpsF4SGOtzheH1U08p4u7if/A4apeG9LvbNXfJD+H1DAMwzAMwzAMwzAMwzAMwzBc/vwL4LImOvpUNA4AAAAASUVORK5CYII=",d=({title:i,category:t})=>{const[o,c]=r.useState([]),s=r.useRef(),A={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjk1ZmFiODdmNDlmMTFmOWZlMDJlODc3MDg1OTBhNiIsIm5iZiI6MTcyNjYyMzM1NC4yMzUwNSwic3ViIjoiNjZlYTJjZjRiNjY3NDZkZDc5MGIxMzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RuCSiumHhZ7dsZwhGoWCDBBfbhMrFwB9sJUfFKxIkv4"}},a=n=>{n.preventDefault(),s.current.scrollLeft+=n.deltaY};return r.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${t||"now_playing"}?language=en-US&page=1`,A).then(n=>n.json()).then(n=>c(n.results)).catch(n=>console.error(n)),s.current.addEventListener("wheel",a)},[]),e.jsxs("div",{className:"title-cards",children:[e.jsx("h2",{children:i||"Popular on Netflix"}),e.jsx("div",{className:"card-list",ref:s,children:o.map((n,m)=>e.jsxs(U,{to:`/player/${n.id}`,className:"card",children:[e.jsx("img",{src:"https://image.tmdb.org/t/p/w500"+n.backdrop_path,alt:""}),e.jsx("p",{children:n.original_title})]},m))})]})},q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO3dW4hVVRzH8WVqaEIPWUGWD13oRnSDbhQSkYGB+RCEBWFBl4fKXsqiiw/1UgZRdAGLCqGbWG81EkF0wcpoDOyGpT2oUFN0cSLKbPrGwr+0Z+agM3utPf+91/l94DwNM/P/n9+eWfvstfbaIYiIiIiIiIiIiIiIiIiITAngUOAU4GLgKuAm4E7gQeAx4HngNeBt4BNgM7Ct8hoCfrHXr4y2u/K1+Npe+b6twKfAB8CbwCvAauAh4F7gNmAZsBg4B5gHzOj8YQEcBlxkb/SjwFp7E74F/qBbRoDvgU3AG8CzwF3AFcDxwPTQJsDBwCI7st+xo7ef/Al8BrwE3Agc5RXEHOB+O3rkf38DLwMnTmUYlwA7K0XIeH/ZuDSt6TBuAPb0KEB6iycnM5sK40ob5GRyXmwijHl2Gin1LMsdyJM1C5G9fgBm5wpjdgc/P5T7VwIs9O6kEK/mCuRu704KsT1XIM95d1KQuTkCed+7i4IsyBGILo/kc2uOM6x/MxbU755ODeQE7w4K81ZqIAu8OyjMttRArnZu4FLgc8rxT5xDSgnkDs/qw94aZtjs44+Uof5cCbDKs/Iwfmr48QIu/1+WEsgznpWH3jWdZIsUuuq6lEDWeVYe9l9bHF++oHvuSQkkLsVxEw5c30zg9h7LgdrsiZRA4jomN2Hide4bX+JZTNu9nhLIN56Vh8nXe4YtR2qzD1MCiSv/3IT6dS+2lYpttCUlkDj16CYkqIwvu2iXoZSmfu5qIPsAh7dsfNkd6gKGPSsPGQFnAe/RDnPqNhFX4BURyJjx5TvPvoCjQx3eC+NCs4vEPceX0+oWXnogw06tnV63cP3LasZxdQMpaVA/u0WD+pF1m9BpbzMO6eSKk1DmB8OR2veN6NJJI4ZTjrItOAplXlzcmRLIx56Vh4nXObdll0f2ZzAlkPWelYeJjxO/0R3rUwKJt/u6CQeewv2S7lnT2TunQu+aTu74IodHUgJ5wLPyMH6ceKqAZUArUgK5xbPyMHqh3E+UYWnqpWpPi4CvKcu5KYGc6V19gerfRWXLaySfXbXDqITye8aC+t2mHIEMendRkHU5Alnj3UVBHs4RyArvLgpyc45ALvfuoiALcwQSPyFrW6Z08T08IjkQC+WjDAX1u41ZwrBAlnp3U4BrcwYy3bZ6lXoGs2/1Bxzbh9vA5hAnz07NGsaYa1uutyh0TLzV7sJGwqiEcgzwrnenHbAx7n7daBiVUKYB19i+7DLaV8D1wEFTEkaPcM6zmcUB2/S+nz6zjFjPA/YenN/45smTBcyy9VHxyQcrgRes4M0dPSkYstoHrJeV1lvscVboOrsVYD5wAbAk7mwALAfus608VtsTFeISpA12a/bWymMndox5JEV1jn3PmK/t6PG4ig32s9fa71plv3u51bLEapuftFGMiIiIiIiIiIiIiIiIiEio4z+YVM1nFEiF0QAAAABJRU5ErkJggg==",J="data:image/png;base64,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",_="data:image/png;base64,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",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4nO3YP2rUQRzG4RFJYyeIuhewtdAbaLedvXgDCzurxcIDiK3gAWIRFnICG0ELe7FQ2EIEEQQj/nss3EKCkMBvs5OZeZ8TzO/74Q1JSomIiIiIhuEc5niAPbzGB3zx1w98wke8xRu8wkvs4yke4m7tb2kKbmIXX21I7W9qAq7h+aaOngDHhDO4j+9OyHHfMhycxZOTOnwCHAGPbMFR7xgSbm/j+AnwH7i8/hUyAWrA420dPws4BBdxkACV4N42j58FHLL+V0EC1IAL+JUAleDWto+fH0H/WP9nMwFqwbMNXP9g/Rf0DVzCTrUPag1eTDz+O1yp/R3NwvsJx/+J67W/oWn4PCHAXu33Nw/fJgS4U/v9zcPvCQGu1n5/80xzvvb7Rw+wU/v9zTNB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MF1D1iJavSE+1Zlp5oz6L0RHvmpSfaMys90ZZV6Y22LEtvtGVReqMt89IbbZmV3mjHqvRIO5alR9qxKD3SjnnpkXbMat/q1DFB7bd3QQIkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAEJMDRZQAIMTRaQAEOTBSTA0GQBCTA0WUACDE0WkABDkwUkwNBkAQkwNFlAAgxNFpAAQ5MFJMDQZAERERERpU9/AMcmPt/3CYM3AAAAAElFTkSuQmCC",ee=()=>e.jsxs("div",{className:"footer",children:[e.jsxs("div",{className:"footer-icons",children:[e.jsx("img",{src:$,alt:""}),e.jsx("img",{src:_,alt:""}),e.jsx("img",{src:J,alt:""}),e.jsx("img",{src:q,alt:""})]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Audio Descriptions"}),e.jsx("li",{children:"Help Center"}),e.jsx("li",{children:"Gift Cards"}),e.jsx("li",{children:"Media Center"}),e.jsx("li",{children:"Investor Relation"}),e.jsx("li",{children:"Jobs"}),e.jsx("li",{children:"Term of Use"}),e.jsx("li",{children:"Legal Notices"}),e.jsx("li",{children:"Cookie Prefences"}),e.jsx("li",{children:"Corportate Information"}),e.jsx("li",{children:"Contact Us"})]}),e.jsx("p",{className:"copyright-text",children:"Lorem ipsum dolor sit amet."})]}),se=()=>e.jsxs("div",{className:"home",children:[e.jsx(V,{}),e.jsxs("div",{className:"hero",children:[e.jsx("img",{src:Y,alt:"",className:"banner-img"}),e.jsxs("div",{className:"hero-caption",children:[e.jsx("img",{src:P,alt:"",className:"caption-img"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo saepe assumenda deleniti. Laboriosam perferendis vero aliquam sapiente, quos in aut."}),e.jsxs("div",{className:"hero-btns",children:[e.jsxs("button",{className:"btn",children:[e.jsx("img",{src:Q,alt:""}),"Play"]}),e.jsxs("button",{className:"btn btn-dark",children:[e.jsx("img",{src:K,alt:""}),"More Info"]})]}),e.jsx(d,{})]})]}),e.jsxs("div",{className:"more-cards",children:[e.jsx(d,{title:"Blockbuster Movies",category:"top_rated"}),e.jsx(d,{title:"Only on Netflix",category:"popular"}),e.jsx(d,{title:"Upcoming",category:"upcoming"}),e.jsx(d,{title:"Top Picks for You",category:"now_playing"})]}),e.jsx(ee,{})]}),ie="/netflix/assets/netflix_spinner-OMdCkKTM.gif",Ae=()=>{const[i,t]=r.useState("Sign In"),[o,c]=r.useState(""),[s,A]=r.useState(""),[a,n]=r.useState(""),[m,w]=r.useState(!1),f=async l=>{l.preventDefault(),w(!0),i==="Sign In"?await S(s,a):await T(o,s,a),w(!1)};return m?e.jsx("div",{className:"login-spinner",children:e.jsx("img",{src:ie,alt:""})}):e.jsxs("div",{className:"login",children:[e.jsx("img",{src:j,className:"login-logo",alt:""}),e.jsxs("div",{className:"login-form",children:[e.jsx("h1",{children:i}),e.jsxs("form",{children:[i==="Sign Up"?e.jsx("input",{value:o,onChange:l=>{c(l.target.value)},type:"text",placeholder:"Your Name"}):e.jsx(e.Fragment,{}),e.jsx("input",{value:s,onChange:l=>{A(l.target.value)},type:"text",placeholder:"Email"}),e.jsx("input",{value:a,onChange:l=>{n(l.target.value)},type:"password",placeholder:"Password"}),e.jsx("button",{onClick:f,type:"submit",children:i}),e.jsxs("div",{className:"form-help",children:[e.jsxs("div",{className:"remember",children:[e.jsx("input",{type:"checkbox",name:"",id:""}),e.jsx("label",{htmlFor:"",children:"Remember Me"})]}),e.jsx("p",{children:"Need Help?"})]})]}),e.jsx("div",{className:"form-switch",children:i==="Sign In"?e.jsxs("p",{children:["New to Netflix? ",e.jsx("span",{onClick:()=>{t("Sign Up")},children:"Sing Up Now"})]}):e.jsxs("p",{children:["Already have Account? ",e.jsx("span",{onClick:()=>{t("Sign In")},children:"Sing In Now"})]})})]})]})},te="data:image/png;base64,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",oe=()=>{const{id:i}=D(),t=u(),[o,c]=r.useState({name:"",key:"",published_at:"",typeof:""}),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjk1ZmFiODdmNDlmMTFmOWZlMDJlODc3MDg1OTBhNiIsIm5iZiI6MTcyNjYyMzM1NC4yMzUwNSwic3ViIjoiNjZlYTJjZjRiNjY3NDZkZDc5MGIxMzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.RuCSiumHhZ7dsZwhGoWCDBBfbhMrFwB9sJUfFKxIkv4"}};return r.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${i}/videos?language=en-US`,s).then(A=>A.json()).then(A=>c(A.results[0])).catch(A=>console.error(A))},[]),e.jsxs("div",{className:"player",children:[e.jsx("img",{onClick:()=>{t(-2)},src:te,alt:""}),e.jsx("iframe",{width:"90%",height:"90%",src:`https://www.youtube.com/embed/${o.key}`,title:"Trailer",frameBorder:"0",allowFullScreen:!0}),e.jsxs("div",{className:"player-info",children:[e.jsx("p",{children:o.published_at.slice(0,10)}),e.jsx("p",{children:o.name}),e.jsx("p",{children:o.type})]})]})},ne=()=>{const i=u();return r.useEffect(()=>{F(g,async t=>{t?(console.log("Logged In"),i("/")):(console.log("Logged Out"),i("/login"))})},[]),e.jsxs("div",{children:[e.jsx(W,{theme:"dark"}),e.jsxs(y,{children:[e.jsx(p,{path:"/",element:e.jsx(se,{})}),e.jsx(p,{path:"/login",element:e.jsx(Ae,{})}),e.jsx(p,{path:"/player/:id",element:e.jsx(oe,{})})]})]})};I(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(k,{children:e.jsx(ne,{})})}));
