export default function ToggleButton({ isChecked, setIsChecked, isDisabled }) {
  return (
    <label class="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
        class="sr-only peer"
        checked={isChecked}
        disabled={isDisabled}
      />
      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
}

// <div class="w-9 h-5 flex justify-end items-center bg-gray-100 p-0.5 rounded-full">
// <div class="w-4 h-4 bg-gray-300 rounded-full"></div>
// </div>

//Note: 如果input type是屬於checkbox的話，我們就會使用checked來記錄他有沒有被選中，而這個值是被儲存在e.target.checked

//TODO:如果像是有這樣子的一大串樣式，如果我能把它做成一個tailwind的樣式封裝後我只需要在外面用props把設定的值傳入。就不用理解所有的tailwind怎麼寫的。我目前應該需要先了解這個toggle怎麼寫。
