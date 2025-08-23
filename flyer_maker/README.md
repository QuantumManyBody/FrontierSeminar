# Installation

Since the code runs on nodejs. 
- First make sure that you have `node` and `npm` installed. 
- To install the dependencies, in `flyer_maker`, run `npm install`.

# Usage
To make a flyer, in the directory `flyer_maker`, run 
```bash
node flyer_maker.js <speaker_id> <food>
```

The speaker information will be pulled from `index.html`, where
there must be a row for the speaker in the following form.
```html
<tr id="speaker_id">
<td>date</td>
<td>
<details>
<summary>title</summary>
<p>abstract</p>
<p>bio</p>
</details>
</td>
<td>
<span>name</span>
<span class="affiliation">/affiliation</span>
</td>
</tr>
```
and the flyer will be named `<speaker_id>.html`.

# Pictures 

Speaker photos should be placed and named as
`flyer_maker/speaker_photos/<speaker_id>.jpeg`. These photos should never
be version controlled or made public online in any way. 


# Printing

This file must be printed from Chrome with the following options

- us letter
- margin: none
- background graphics: enabled.
