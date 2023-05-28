#Turkey SVG Map

JUST SVG:
![Turkey SVG Map](turkey.svg?raw=true "Turkey Svg Map")

POPUP PLATE EXAMPLE:
![Turkey SVG Map w Popup Plate](demo/popup/preview.png?raw=true "Turkey Map")

Tabii, aşağıda Markdown biçimine dönüştürülmüş bir README içeriği bulunmaktadır:

## About Turkey SVG Map

Turkey-SVG-Map is a GitHub repository that provides SVG vector maps for each city in Turkey. This repository aims to offer a comprehensive collection of SVG maps with associated data for easy integration into various projects. Each SVG map contains relevant information, such as city codes, phone codes, city names, and additional data.

## Usage

To use the SVG maps from this repository, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/ali-han/Turkey-SVG-Map.git
   ```

2. Navigate to the repository directory:

   ```bash
   cd Turkey-SVG-Map
   ```

3. Inside the repository, you will find SVG files for each city, named according to their respective city names.

4. Select the desired SVG map for your project and integrate it into your application.

5. Extract the relevant data from the SVG map using the provided attributes. Each SVG element representing a city contains the following data attributes:

   - `data-city-code`: The code assigned to the city.
   - `data-phone-code`: The phone code for the city.
   - `data-city-name`: The name of the city.
   - `data-content`: Additional content related to the city (if available).

## Example

Here is an example of how you can extract data from an SVG element representing the city of Adana:

```svg
<g id="adana" data-city-code="01" data-phone-code="322" data-city-name="Adana" data-content="">
  <!-- SVG path for Adana -->
</g>
```

In this example, you can access the following information about Adana:

- City Code: 01
- Phone Code: 322
- City Name: Adana
- Additional Content: (empty)

Feel free to explore the repository and utilize the SVG maps for your projects. You can also contribute by adding missing maps or enhancing the existing ones.

## Contribution

Contributions to Turkey-SVG-Map are highly appreciated. If you would like to contribute, please follow these steps:

1. Fork the repository to your GitHub account.

2. Make the necessary changes or additions to the SVG maps.

3. Submit a pull request, explaining the changes you have made.

Together, we can improve and expand the collection of SVG maps, making it a valuable resource for developers and designers working on projects related to Turkish cities.

## License

The SVG maps provided in this repository are available under the [MIT License](LICENSE). Please make sure to review and comply with the license terms when using the maps in your projects.

## Acknowledgements

This repository is maintained by [Ali Han](https://github.com/ali-han). We would like to express our gratitude to the contributors who have helped make this collection possible.

If you have any questions, suggestions, or encounter any issues, please feel free to open an issue on the repository. We are here to assist you!

Happy coding!