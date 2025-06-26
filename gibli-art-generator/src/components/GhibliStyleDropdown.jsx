const GhibliStyleDropdown = ({ value, onChange }) => (
    <div>
        <label htmlFor="ghibli-style" className="text-md font-semibold mb-2 block">Ghibli Style</label>
        <select
            id="ghibli-style"
            value={value}
            onChange={onChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-orange-800 focus:border-transparent transition">
            <option value="general">Studio Ghibli</option>
            <option value="anime">Totoro</option>
            <option value="fantasy-art">Howl's Moving Castle</option>
            <option value="illustration">Princess Mononoke</option>
            <option value="digital-art">Spirited Away</option>
            <option value="cinematic">Action Figure</option>
            <option value="comic-book">Comic Book</option>
            <option value="line-art">Ink Drawing</option>
            <option value="watercolor">Watercolor</option>
            <option value="cyberpunk">Cyber Ghibli</option>
        </select>
    </div>
);

export default GhibliStyleDropdown;