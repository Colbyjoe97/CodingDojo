require "stringer/version"
module Stringer
    def self.spacify *strings
        string = ""
        strings.each do |s|
          if s != strings.last
            string += s + " "
          else
            string += s
          end
        end
        string
    end

    def self.minify(str, num)
      return str if str.length <= num
      return str[0...num] + "..."
    end

    def self.replacify(og, toReplace, replacement)
      string = ""
      str = ""
      idx = 0
      while idx < og.length
        str += og[idx]
        idx += 1
        if og[idx] == " " || og[idx] == nil
          if str != toReplace
            if og[idx] == nil
              string += str
            else
              string += str + " "
            end
            str = ""
            idx += 1
          else
            str = replacement
            string += str + " "
            str = ""
            idx += 1
          end
        end
      end
      return string
    end

    # Shorter replacify
  #   def self.replacify(string, to_replace, replace_with)
  #     split = string.split(' ')
  #     split.each_with_index do |word, idx|
  #         split[idx] = replace_with if word == to_replace
  #         split[idx] = (replace_with + word[word.length-1]) if word[0...word.length-1] == to_replace
  #     end
  #     return split.join(' ')
  # end

    def self.tokenize(str)
      arr = []
      string = ""
      idx = 0
      while idx < str.length
        if str[idx] != " "
          string += str[idx]
          idx += 1
        elsif str[idx] == " "
          arr.push(string)
          string = ""
          idx += 1
        end
      end
      arr.push(string)
      return arr
    end

    def self.removify(og, toRemove)
      # 1 line method:
      # return og.split(' ').map! { |word| word unless word == toRemove }.join(' ').split(' ').join(' ')
      string = ""
      str = ""
      idx = 0
      idx2 = 0
      while idx < og.length
        if og[idx] == " "
          if str == toRemove
            str = ""
            while idx2 < str.length
              idx += 1
              idx2 += 1
            end
            idx += 1
          else
            string += str + " "
            str = ""
            idx += 1
          end
        else
          str += og[idx]
          idx += 1
        end
      end
      string += str
      return string
    end

end