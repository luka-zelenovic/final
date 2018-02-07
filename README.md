# Germoscope
## Your mobile is a lens for the Microwords

### The project
An interactive simulation of the ecosystem and the effect of cleaning tools enabling access to accurate scientific data through playful education.
We created **Germoscope** as a visual representation of the presence of bacteria of the spaces we live everyday. Instead of a professional microscope we did it with the help of a commonly used smartphone an simple webapp for greater accessibility. 
First of all we use the word *germ* but actually we focus only on bacteria, bypassing viruses and fungi according to the research  based on actual scientific papers, linked below. We decided to show four main bacteria phylas that are the most common regardless of the type of surface being tested: Actinobacteria, Proteobacteria, Fimicutes and Bacteroidetes.This families are present on eveery type of surfaces and we took an averaged presence percentage for calculating a plausible distribution in our germs population. The single germs have been illustrated an animated taking full account of their nature and peculiarities: shapes, colours, motion and chemical resistance.
Beside the informational intent we took interactivity for advocating good hygiene practice while debunking some common misconception. These features focuses on cleaning tools efficacy and in particular on four different types of cleaning product as in Soap, Ammonia, Alcohol and Vinegar+Baking Soda, the touchscreen lets us interact with the virtual germs and the response of our inputs teach us: the type of germs they can kill, the strength and the difference between killing and removing germs, which is totally not banal but became clear when you can actually see them!

![Germs](assets/spritea.png) ![Germs](assets/spriteb.png) ![Germs](assets/spritef.png) ![Germs](assets/spritep.png) 
![Germs](assets/spritea.png) ![Germs](assets/spriteb.png) ![Germs](assets/spriteb.png) 
![Germs](assets/spritea.png)  ![Germs](assets/spritef.png) ![Germs](assets/spritep.png) ![Germs](assets/spritef.png) 


---

### App structure

So, we tried to keep the code more concise considering the performance of a JS client-side environment for AR and choose, after many iteration, to use a single object for collecting the germs automatas as an internal array of objects which describe their characteristics and behaviour, according to their type and a small degree of random variation.
It also encapsulate the the function that manage the whole ecosystem life is its normal activities and under cleaning tools attacks. It generates an offscreen buffer (P5.Graphics), for a size greater then the screen that enable a wide exploration of the tracked surfaces. Finally the marvellous [jsARtoolkit](https://artoolkit.github.io/jsartoolkit5/), a js port from ARtoolkit in C++, detect the marker and return an array with the coordinates of its square vertex, then the position and area of the marker is used to calculate a factor for translating the layer and scaling the single germs.

![Graf2](/assets/graf2.png)

---

### Problem Solving
While the concept was pretty straightforward to develope we had to face some complexities in a wide range of topics solved case by case with basic geometry, automatas simulation, extensive us of OOP, a mixture of libraries and of course lot of tweaking...

![Graf1 ](/assets/graf1.png)

---

**References**

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3223236/

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3223236/

https://www.mnn.com/health/healthy-spaces/stories/disinfectants-a-guide-to-killing-germs-the-right-way


Student project for the Creative Coding 2017 studio
at the Politecnico di Milano. 

**Team members:**
Luka Zelenovic
Matteo Testa
Kacper Bierylo
